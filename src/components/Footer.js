import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
       background: "linear-gradient(90deg, #f0e3d1ff 0%, #fddfebff 50%, #fcd7d4ff 100%)", // full-width black background
      }}
    >
      {/* Inner centered div */}
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          background: "linear-gradient(90deg, #f5debe 0%, #fcbbd5 50%, #ffbcb6 100%)",
          padding: "40px 20px", // padding INSIDE inner div
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "20px",
          // background: "linear-gradient(90deg, #f5debe 0%, #fcbbd5 50%, #ffbcb6 100%)",
          borderRadius: "0px",
          
        }}
      >
        {/* Company Info */}
        <div style={{ flex: 1, minWidth: "200px" }}>
          <h2>MyCompany</h2>
          <p>We deliver high-quality digital solutions for your business growth.</p>
          <p>Email: info@mycompany.com</p>
          <p>Phone: +91 123 456 7890</p>
        </div>

        {/* Quick Links */}
        <div style={{ flex: 1, minWidth: "150px" }}>
          <h3>Quick Links</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="/" style={{ color: "#464646ff", textDecoration: "none" }}>Home</a></li>
            <li><a href="/product" style={{ color: "#464646ff", textDecoration: "none" }}>Products</a></li>
            <li><a href="google.com" style={{ color: "#464646ff", textDecoration: "none" }}>Services</a></li>
            <li><a href="facebook.com" style={{ color:"#464646ff", textDecoration: "none" }}>Contact</a></li>
          
          </ul>
        </div>

        {/* Social Media */}
        <div style={{ flex: 1, minWidth: "150px" }}>
          <h3>Follow Us</h3>
  <div style={{ display: "flex", gap: "10px", fontSize: "20px" }}>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#000" }}>🌐</a>
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "#000" }}>🐦</a>
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "#000" }}>📘</a>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#000" }}>📸</a>
  </div>
        </div>

        {/* Newsletter */}
        <div style={{ flex: 1, minWidth: "200px" }}>
          <h3>Newsletter</h3>
          <p>Subscribe for latest updates:</p>
          <form>
            <input
              type="email"
              placeholder="Your email"
              style={{
                padding: "8px",
                width: "80%",
                border: "none",
                borderRadius: "4px",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "8px 12px",
                border: "none",
                background: "#ff6600",
                color: "#fff",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer bottom text */}
      <hr style={{ margin: "20px 0", borderColor: "#555" }} />
      <p style={{ textAlign: "center", fontSize: "14px", color: "#7f7a7aff" }}>
        &copy; 2025 MyCompany. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
