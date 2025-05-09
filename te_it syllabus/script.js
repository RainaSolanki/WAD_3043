document.querySelectorAll('.subjectButton').forEach(button => {
    button.addEventListener('click', function() {
      var subject = this.getAttribute('data-subject');
      var syllabusDetails = document.getElementById('syllabusDetails');
      var subjectDetail = document.getElementById('subjectDetail');
      
      // Show the detailed syllabus for the clicked subject
      syllabusDetails.style.display = 'block';
  
      // Set the detailed content based on the clicked subject
      if (subject === 'Computer Networks & Security') {
        subjectDetail.innerHTML = '<strong>Computer Networks & Security Detailed Syllabus:</strong><ul><li>Unit 1 : APPLICATION LAYER</li><li>Unit 2 : WIRELESS STANDARDS</li><li>Unit 3 : ADHOC AND WSN</li></ul>';
      } else if (subject === 'Data Science and Big Data Analytics') {
        subjectDetail.innerHTML = '<strong>Data Science and Big Data Analytics Detailed Syllabus:</strong><ul><li>Unit 1 : INTRODUCTION: DATA SCIENCE AND BIG DATA</li><li>Unit 2 : MATHEMATICAL FOUNDATION OF BIG DATA</li><li>Unit 3 : BIG DATA PROCESSING </li></ul>';
      } else if (subject === 'Web Application Development') {
        subjectDetail.innerHTML = '<strong>Web Application Development Detailed Syllabus:</strong><ul><li>Unit 1 : INTRODUCTION TO WEB TECHNOLOGIES</li><li>Unit 2 : WEB SCRIPTING LANGUAGES</li><li>Unit 3 : FRONT END TECHNOLOGIES</li></ul>';
      } else if (subject === 'Cloud Computing') {
        subjectDetail.innerHTML = '<strong>Cloud Computing Detailed Syllabus:</strong><ul><li>Unit 1 : FUNDAMENTALS Of CLOUD COMPUTING</li><li>Unit 2 : CLOUD-ENABLING TECHNOLOGY AND VIRTUALIZATION</li><li>Unit 3 : COMMON STANDARDS AND CLOUD PLATFORMS</li></ul>';
      }
    });
  });
  