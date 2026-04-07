const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    
    let original = content;
    
    content = content.replace(/font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl/g, 'font-heading text-4xl sm:text-[50px] lg:text-[80px]');
    content = content.replace(/font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl/g, 'font-heading text-4xl sm:text-[50px] lg:text-[80px]');
    content = content.replace(/font-heading text-5xl sm:text-6xl lg:text-\[5rem\] xl:text-\[5\.5rem\]/g, 'font-heading text-4xl sm:text-[50px] lg:text-[80px]');

    if (original !== content) {
      console.log('Updated ' + file);
      fs.writeFileSync(path.join(dir, file), content);
    }
  }
});
