const https = require('https');
const fs = require('fs');

const url = 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3b7e34d0-a214-4dcd-b631-ed48708cfa21/image-1772725307737.png';
const out = fs.createWriteStream('C:/Users/HP Elitebook/orchids-projects/black-porcupine/micho-app/public/chefs.png');

https.get(url, (res) => {
  if (res.statusCode === 302 || res.statusCode === 301) {
    https.get(res.headers.location, (r) => r.pipe(out));
  } else {
    res.pipe(out);
  }
  out.on('finish', () => console.log('done', res.statusCode));
});
