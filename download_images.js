import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = {
  'daewoo_puma.jpg': 'https://www.machinestation.us/wp-content/uploads/2024/07/Doosan-Puma-300C-CNC-Turning-Center-Big-Bore-Lathe-for-Sale-in-California-a-1.jpg',
  'goodway_cnc.png': 'https://www.goodwaycnc.com/_Image/product/hor/gls150.png',
  'hardinge_cnc.jpg': 'https://www.worldwidemachinetool.com/wp-content/uploads/2016/03/Hardinge-Talent-51-CNC-Lathe-Slant-Bed.jpg',
  'ace_micromatic.png': 'https://www.acemicromatic.net/wp-content/uploads/2022/03/Super-Jobber-500.png',
  'takisawa_cnc.jpg': 'https://www.takisawa.co.jp/english/product/cnc/tc/images/ph_tc-20.jpg',
  'auto_parts.jpg': 'https://sabner.com/wp-content/uploads/2021/01/automotive-parts-1.jpg',
  'valve_liners.jpg': 'https://5.imimg.com/data5/ANDROID/Default/2022/10/PP/OR/VM/28570323/product-jpeg-1000x1000.jpg',
  'sleeves.jpg': 'https://www.wolframcarbide.com/wp-content/uploads/2019/08/tungsten-carbide-sleeve.jpg',
  'cross_1502.jpg': 'https://5.imimg.com/data5/SELLER/Default/2023/7/324632863/OC/BT/QO/28547493/integral-fitting-1502-cross-1000x1000.jpg',
  'forge_shafts.jpg': 'https://5.imimg.com/data5/ANDROID/Default/2021/1/WA/VO/XF/18659103/product-jpeg-1000x1000.jpg',
  'flanges.jpg': 'https://5.imimg.com/data5/SELLER/Default/2022/6/XF/YA/ER/13600615/flanges-1000x1000.jpg'
};

const dir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

console.log('🚀 Starting secure image downloads...');

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
};

Object.entries(images).forEach(([filename, url]) => {
  const filePath = path.join(dir, filename);
  const file = fs.createWriteStream(filePath);
  
  https.get(url, options, (response) => {
    // Handle redirects (important for some sites)
    if (response.statusCode === 301 || response.statusCode === 302) {
      console.log(`↪️ Redirecting for ${filename}...`);
      https.get(response.headers.location, options, (redirectRes) => {
        if (redirectRes.statusCode === 200) {
          redirectRes.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`✅ Downloaded: ${filename}`);
          });
        } else {
          file.close();
          fs.unlink(filePath, () => {});
          console.error(`❌ Failed (Redirect): ${filename} - Status ${redirectRes.statusCode}`);
        }
      });
      return;
    }

    if (response.statusCode === 200) {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${filename}`);
      });
    } else {
      file.close();
      fs.unlink(filePath, () => {});
      console.error(`❌ Failed: ${filename} - Status ${response.statusCode} from ${url}`);
    }
  }).on('error', (err) => {
    file.close();
    fs.unlink(filePath, () => {});
    console.error(`❌ Connection Error: ${filename} - ${err.message}`);
  });
});
