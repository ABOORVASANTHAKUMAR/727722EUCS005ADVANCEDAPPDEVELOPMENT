import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './StudentEnquiry.css';

const StudentEnquiry = () => {
  const [enquiry, setEnquiry] = useState('');
  const [file, setFile] = useState(null);
  const [enquiries, setEnquiries] = useState([]);
  const [status, setStatus] = useState('Pending');
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = ['Academic', 'Administrative', 'Technical', 'Other'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enquiry.trim()) {
      const newEnquiry = { text: enquiry, file, status };
      setEnquiries([...enquiries, newEnquiry]);
      setEnquiry('');
      setFile(null);
      setStatus('Pending'); // Reset status
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="student-enquiry-container">
      <nav className="navbar">
        <h1>AKSHAYA COLLEGE OF ENGINEERING AND TECHNOLOGY, SEERKALI</h1>
        <ul className="nav-links">
          <li>
            <ScrollLink to="about-us" smooth={true} duration={500}>
              About Us
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="enquiry-form" smooth={true} duration={500}>
              Enquiry Form
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact-information" smooth={true} duration={500}>
              Contact Us
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="campus-tours" smooth={true} duration={500}>
              Campus Tours
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="testimonials" smooth={true} duration={500}>
              Testimonials
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="downloads" smooth={true} duration={500}>
              Downloads
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="faqs" smooth={true} duration={500}>
              FAQs
            </ScrollLink>
          </li>
          <li>
            <RouterLink to="/profile">
              <FontAwesomeIcon icon={faUser} />
            </RouterLink>
          </li>
        </ul>
      </nav>
      <div className="enquiry-content">
        <section id="about-us">
          <h2>About Us</h2>
          <main className="about-container">
            <section className="about-section">
              <h2>Welcome to Akshaya College of Engineering and Technology</h2>
              <p>At Akshaya College of Engineering and Technology, we are dedicated to providing an exceptional educational experience that prepares students to excel in the dynamic fields of engineering and technology. Founded in 2005, our college has become a leading institution renowned for its commitment to academic excellence, innovation, and holistic development.</p>
            </section>

            <section className="mission-vision">
              <div className="vision">
                <h3>Our Vision</h3>
                <p>To be a premier institution known for pioneering research, cutting-edge technology education, and cultivating leaders who will shape the future of engineering and technology.</p>
              </div>
              <div className="mission">
                <h3>Our Mission</h3>
                <p>Our mission is to deliver high-quality education through innovative teaching methods, hands-on experience, and industry collaboration. We aim to empower students with the knowledge, skills, and ethical values needed to tackle complex challenges and contribute to society.</p>
              </div>
            </section>

            <section className="values">
              <h3>Core Values</h3>
              <ul>
                <li><strong>Excellence:</strong> Pursuing the highest standards in teaching, research, and professional development.</li>
                <li><strong>Integrity:</strong> Maintaining honesty and transparency in all our actions and decisions.</li>
                <li><strong>Innovation:</strong> Fostering creativity and critical thinking to drive technological advancement.</li>
                <li><strong>Inclusivity:</strong> Creating a welcoming environment that embraces diversity and promotes equality.</li>
              </ul>
            </section>

            <section className="programs">
              <h3>Our Programs</h3>
              <p>Akshaya College offers a range of undergraduate and postgraduate programs designed to equip students with the skills needed to succeed in their chosen fields. Our programs include:</p>
              <ul>
                <li>Bachelor of Technology (B.Tech) in Computer Science and Engineering</li>
                <li>Bachelor of Technology (B.Tech) in Electronics and Communication Engineering</li>
                <li>Bachelor of Technology (B.Tech) in Mechanical Engineering</li>
                <li>Bachelor of Technology (B.Tech) in Civil Engineering</li>
                <li>Master of Technology (M.Tech) in Advanced Manufacturing</li>
                <li>Master of Technology (M.Tech) in Artificial Intelligence</li>
              </ul>
            </section>

            <section className="facilities">
              <h3>Our Facilities</h3>
              <ul>
                <li>Advanced Laboratories: Cutting-edge facilities for practical learning and research.</li>
                <li>Modern Classrooms: Interactive and tech-enabled spaces designed to enhance learning.</li>
                <li>Library: A vast collection of books, journals, and digital resources to support academic research.</li>
                <li>Hostels: Safe and comfortable accommodation with modern amenities.</li>
                <li>Sports Complex: Facilities for various sports and recreational activities to promote student well-being.</li>
              </ul>
            </section>

            <section className="faculty">
              <h3>Our Faculty</h3>
              <p>Our faculty members are highly experienced professionals with strong academic backgrounds and industry experience. They are committed to providing quality education and mentoring students to achieve their full potential.</p>
            </section>

            <section className="community">
              <h3>Community Engagement</h3>
              <p>We are actively involved in community service, including local outreach programs, environmental initiatives, and partnerships with industry to provide real-world experience and contribute to societal development.</p>
            </section>
          </main>
        </section>

        <section id="enquiry-form">
          <h2>Enquiry Form</h2>
          <form className="enquiry-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Full Name" required />
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Email" required />
            <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          required
        >
          <option value="" disabled>Select category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
            <label htmlFor="message">Your Enquiry</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Enquiry"
              value={enquiry}
              onChange={(e) => setEnquiry(e.target.value)}
              required
            ></textarea>
            <label htmlFor="file">Attach a File</label>
            <input type="file" id="file" name="file" onChange={handleFileChange} />
            <button type="submit">Submit</button>
          </form>
          <div className="enquiry-list">
        <h3>Previous Enquiries:</h3>
        <ul>
          {enquiries.map((enq, index) => (
            <li key={index}>
             
              <div>Enquiry: {enq.text}</div>
              {enq.file && <div>Attached File: {enq.file.name}</div>}
              <div>Status: {enq.status}</div>
            </li>
          ))}
        </ul>
      </div>
        </section>

        <section id="contact-information">
          <h2>Contact Information</h2>
          <p>
            Address: 123 College Road, Seerkali<br />
            Phone: +91 123 456 7890<br />
            Email: info@akshayacollege.edu
          </p>
        </section>

        <section id="campus-tours">
          <h2>Campus Tours</h2>
          <p>
            Schedule a campus tour to explore our facilities and meet our faculty. 
            <a href="/campus-tour">Click here</a> to schedule a tour.
          </p>
        </section>

        <section id="testimonials">
          <h2>Testimonials</h2>
          <div className="testimonial">
            <blockquote>
              <p>"Akshaya College of Engineering and Technology has truly been a transformative experience for me. The education I received here was not only top-notch but also incredibly practical. The curriculum is designed to keep pace with the latest advancements in technology, and the hands-on projects and internships provided invaluable real-world experience. The faculty’s dedication to student success was evident in every lecture and interaction. This college has not just prepared me for a career but has also instilled in me a lifelong passion for learning and innovation."</p>
              <footer>– Alumni, Class of 2020</footer>
            </blockquote>
          </div>
          <div className="testimonial">
            <blockquote>
              <p>"As a current student at Akshaya College, I am continually impressed by the level of support and encouragement from the faculty. Their doors are always open for guidance, and they invest time in understanding each student’s goals and aspirations. The state-of-the-art facilities and the collaborative learning environment have fostered both my personal and professional growth. The vibrant campus life and the numerous extracurricular opportunities make this college a fantastic place to learn and grow."</p>
              <footer>– Current Student</footer>
            </blockquote>
          </div>
        </section>

        <section id="downloads">
          <h2>Downloads</h2>
          <ul>
            <li><a href="/brochure.pdf" download>Download College Brochure</a></li>
            <li><a href="/application-form.pdf" download>Download Application Form</a></li>
          </ul>
        </section>
        <section id="faqs">
  <h2>FAQs</h2>
  <div className="faq-item">
    <h3>What programs does the college offer?</h3>
    <p>We offer a variety of undergraduate and postgraduate programs in engineering and technology fields. Please refer to our <a href="#about-us">About Us</a> section for more details.</p>
  </div>
  <div className="faq-item">
    <h3>How can I apply for admission?</h3>
    <p>You can apply online through our <a href="/application-form.pdf">Application Form</a>. For further assistance, you may contact our admission office.</p>
  </div>
  <div className="faq-item">
    <h3>What is the application deadline?</h3>
    <p>The application deadline for the upcoming academic year is June 30th. Please ensure you submit your application before this date.</p>
  </div>
  <div className="faq-item">
    <h3>Are there any scholarships available?</h3>
    <p>Yes, we offer various scholarships based on academic performance, financial need, and other criteria. Please visit our <a href="#scholarships">Scholarships</a> section for more information.</p>
  </div>
  <div className="faq-item">
    <h3>What are the tuition fees?</h3>
    <p>Tuition fees vary by program. Detailed information about the fees for each program can be found on our <a href="#tuition">Tuition Fees</a> page.</p>
  </div>
  <div className="faq-item">
    <h3>Do you offer accommodation facilities?</h3>
    <p>Yes, we provide accommodation facilities for both undergraduate and postgraduate students. For more details, visit our <a href="#accommodation">Accommodation</a> page.</p>
  </div>
  <div className="faq-item">
    <h3>What are the eligibility criteria for admission?</h3>
    <p>The eligibility criteria vary by program. Generally, you need to meet the academic requirements specified for the program you are applying to. Please check the specific requirements on our <a href="#admissions">Admissions</a> page.</p>
  </div>
  <div className="faq-item">
    <h3>Can I visit the campus before applying?</h3>
    <p>Yes, we encourage prospective students to visit our campus. You can schedule a campus tour by filling out the form on our <a href="#campus-tours">Campus Tours</a> page.</p>
  </div>
  <div className="faq-item">
    <h3>What support services are available for students?</h3>
    <p>We offer various support services, including academic advising, counseling, career services, and extracurricular activities. For more information, visit our <a href="#support-services">Support Services</a> page.</p>
  </div>
  <div className="faq-item">
    <h3>How can I contact the college?</h3>
    <p>You can contact us via email at <a href="mailto:info@akshayacollege.edu">info@akshayacollege.edu</a> or by phone at +91 123 456 7890. You can also visit us at 123 College Road, Seerkali.</p>
  </div>
</section>

      </div>
    </div>
  );
};

export default StudentEnquiry;
