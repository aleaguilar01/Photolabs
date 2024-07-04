const { query } = require("express");

const router = require("express").Router();

module.exports = db => {
  router.get("/photos", (request, response) => {
    const protocol = request.protocol;
    const host = request.hostname;
    const port = process.env.PORT || 8001;
    const serverUrl = `${protocol}://${host}:${port}`;

    db.query(`
      SELECT 
      json_agg(
          json_build_object(
            'id', photo.id,
            'urls', json_build_object(
              'full', (CASE WHEN photo.full_url LIKE 'http%' THEN photo.full_url ELSE concat('${serverUrl}/images/', photo.full_url) END),
              'regular', (CASE WHEN photo.regular_url LIKE 'http%' THEN photo.regular_url ELSE concat('${serverUrl}/images/', photo.regular_url) END)
            ),
            'user', json_build_object(
              'username', user_account.username,
              'name', user_account.fullname,
              'profile', concat('${serverUrl}/images/', user_account.profile_url)
            ),
            'location', json_build_object(
              'city', photo.city,
              'country', photo.country
            ),
            'similar_photos', (
              SELECT 
                json_agg(
                  json_build_object(
                    'id', similar_photo.id,
                    'urls', json_build_object(
                      'full', (CASE WHEN similar_photo.full_url LIKE 'http%' THEN similar_photo.full_url ELSE concat('${serverUrl}/images/', similar_photo.full_url) END),
                      'regular',(CASE WHEN similar_photo.regular_url LIKE 'http%' THEN similar_photo.regular_url ELSE concat('${serverUrl}/images/', similar_photo.regular_url) END)
                    ),
                    'user', json_build_object(
                      'username', similar_user_account.username,
                      'name', similar_user_account.fullname,
                      'profile', concat('${serverUrl}/images/', similar_user_account.profile_url)
                    ),
                    'location', json_build_object(
                      'city', similar_photo.city,
                      'country', similar_photo.country
                    )
                  )
                )
              FROM photo AS similar_photo
              JOIN user_account AS similar_user_account ON similar_user_account.id = similar_photo.user_id
              WHERE similar_photo.id <> photo.id
              AND similar_photo.topic_id = photo.topic_id
              LIMIT 4
            )
          )
        ) as photo_data
      FROM photo
      JOIN user_account ON user_account.id = photo.user_id;
    `).then(({ rows }) => {
      response.json(rows[0].photo_data);
    }); 
  });

  router.post("/photos", (request, response) => {
    const data = request.body
    db.query(
      `INSERT INTO photo(full_url, regular_url, city, country, user_id, topic_id)
      VALUES ($1, $2, $3, $4, $5, $6)
      `, [data.full_url, data.regular_url, data.city, data.country, Math.floor(Math.random() * (10 - 1 + 1)) + 1, Number(data.topic_id)]
    ).then(res=>console.log(res))
  })
  return router;
};
