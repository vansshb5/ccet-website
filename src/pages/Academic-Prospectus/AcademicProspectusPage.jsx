import React from 'react';
import './AcademicProspectusPage.css';

const AcademicProspectusPage = () => {
  const currentProspectusURL = "/ccet-website/public/pdfs/Prospectus-2025.pdf";

  const previousProspectuses = [
    { year: "2024-25", url: "/ccet-website/public/pdfs/Prospectus-2024.pdf" },
    { year: "2023-24", url: "/ccet-website/public/pdfs/Prospectus-2023.pdf" },
    { year: "2022-23", url: "/ccet-website/public/pdfs/Prospectus-2022.pdf" },
    { year: "2021-22", url: "/ccet-website/public/pdfs/Prospectus-2022.pdf" },
    { year: "2020-21", url: "/ccet-website/public/pdfs/Prospectus-2022.pdf" },
  ];

  return (
    <div className="academic-prospectus-container">
      {/* Description Section */}
      <h1>Academic Prospectus</h1>
      <p>
        Prospectus Overview – CCET
The CCET prospectus presents a comprehensive overview of our institution, highlighting our accredited programs in engineering and technology, highly qualified faculty, state-of-the-art infrastructure, and student-centered learning environment. It serves as a resource for prospective students, parents, and stakeholders to understand our academic vision, admission procedures, and commitment to excellence in technical education.
      </p>

      {/* Current Year Prospectus */}


      {/* Previous Years Prospectus */}

    </div>
  );
};

export default AcademicProspectusPage;
