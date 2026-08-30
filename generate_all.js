const fs = require('fs');

// We will load or construct the full 9-subject curriculum according to Heed International School Dhaka Class 1 syllabus.
const allData = {
  bangla: require('./build_curriculum.js'), // bangla is already curated
};

// Let's create complete datasets for english, math, islam, gk, science, computer, moral, drawing
