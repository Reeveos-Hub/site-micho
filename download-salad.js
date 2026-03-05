const https = require('https');
const fs = require('fs');

const files = [
  ['https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3b7e34d0-a214-4dcd-b631-ed48708cfa21/a706a1dc-c1c2-4eda-b3e0-cbcb0b6cf897-1772732139142.jpg?width=8000&height=8000&resize=contain', 'C:/Users/HP Elitebook/orchids-projects/black-porcupine/micho-app/public/food-salad.jpg'],
  ['https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3b7e34d0-a214-4dcd-b631-ed48708cfa21/39cb3841-27c3-42c2-a7b9-ae12dd4e9e82-1772732152638.jpg?width=8000&height=8000&resize=contain', 'C:/Users/HP Elitebook/orchids-projects/black-porcupine/micho-app/public/food-icli-kofte.jpg'],
];

function download([url, dest]) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        download([res.headers.location, dest]).then(resolve).catch(reject);
        return;
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); console.log('done', dest.split('/').pop()); resolve(); });
    }).on('error', reject);
  });
}

Promise.all(files.map(download)).then(() => console.log('ALL DONE'));
