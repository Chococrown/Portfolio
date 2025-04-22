import '../styles/About.css'

function About() {
    return <div className="about">
        <div className="about__01">
            <h2>เกี่ยวกับ</h2>
            <br />

            <img 
            src="../images/profile.jpeg" 
            alt="" 
            style={{width: '180px', height: 'auto'}} 
            className="about__img__01" />            
            
            <div>สวัสดีครับผมชื่อประเสริฐ ตุ่นก่อ ที่สนใจด้านการพัฒนาเว็บแอปพลิเคชันด้วยเทคโนโลยีสมัยใหม่</div>
            <div>ผมมุ่งมั่นที่จะพัฒนาเว็บแอปพลิเคชันด้วยเทคโนโลยีสมัยใหม่ให้มีความสวยงามและทันสมัย และพร้อมรับโอกาสใหม่ๆ
                ในการพัฒนาทักษะและสร้างผลงานที่มีคุณค่า</div>
        </div>

        <hr />


        <div className="about__01">
            <h2>การศึกษา</h2>
            <br />
           
            <img 
            src="../images/stou.png" 
            alt="STOU" 
            style={{width: '50vw', height: 'auto'}} />
           
            <div>ปริญญาตรี วิทยาการคอมพิวเตอร์ มหาวิทยาลัยสุโขทัยธรรมาธิราช 2567</div>
            <div>ปริญญาตรี วิทยาการจัดการ (การตลาด) มหาวิทยาลัยสุโขทัยธรรมาธิราช 2564</div>
        </div>

        <hr />


        <div className="about__01">
            <h2>ประสบการณ์</h2>
            <br />

            <div> พนักงานขาย | บริษัท คิงเพาเวอร์ แท็กซ์ฟรี จำกัด ( มกราคม 2565 - ปัจจุบัน ) </div>
            <div> พนักงานแคชเชียร์ | บริษัท คิงเพาเวอร์ อินเตอร์เนชั่นแนล จำกัด ( กันยายน 2557 - ธันวาคม 2564 ) </div>
        </div>
        
        <hr />


        <div className="about__01">
            <h2>ทักษะเด่น</h2>
            <br />
            
            <div> การออกแบบเว็บด้วย HTML / CSS / JavaScript / TypeScript / Git / React </div>
        </div>

        <hr />


        <div className="skill">
            <h2>ทักษะ</h2>
            <br />

        <div className="skill__01">
            <div>
                <img 
                src="../icons/skill/HTML.svg" 
                alt="HTML" 
                style={{width: '5vw', height: 'auto'}} />
                <p>HTML</p>
            </div>
            <div>
                <img 
                src="../icons/skill/CSS.svg" 
                alt="CSS" 
                style={{width: '5vw', height: 'auto'}} />
                <p>CSS</p>
            </div>
            <div>
                <img 
                src="../icons/skill/JavaScript.svg" 
                alt="Java Script" 
                style={{width: '5vw', height: 'auto'}} />
                <p>Java Script</p>
            </div>
            <div>
                <img 
                src="../icons/skill/TypeScript.svg" 
                alt="TypeScript" 
                style={{width: '5vw', height: 'auto'}} />
                <p>TypeScript</p>
            </div>
            <div>
                <img 
                src="../icons/skill/Git.svg" 
                alt="Git" 
                style={{width: '5vw', height: 'auto'}} />
                <p>Git</p>
            </div>
            <div>
                <img 
                src="../icons/skill/React-Dark.svg" 
                alt="React" 
                style={{width: '5vw', height: 'auto'}} />
                <p>React</p>
            </div>
            {/* <div>
                <img 
                src="../icons/skill/NodeJS-Dark.svg" 
                alt="Node.js"
                style={{width: '5vw', height: 'auto'}} />
                <p>Node.js</p>
            </div> */}
        </div>

        <hr />

        </div>

    </div>
}

export default About;