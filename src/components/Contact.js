import React from 'react'

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope" />
            <h3>Email</h3>
            <a href="#">information@untitled.tld</a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-phone" />
            <h3>Phone</h3>
            <span>(000) 000-0000 x12387</span>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-home" />
            <h3>Address</h3>
            <span>
              1234 Somewhere Road #5432
              <br />
              Nashville, TN 00000
              <br />
              United States of America
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
)

export default Contact
