import React, { useEffect, useState } from "react";
import {
  Card,
  Avatar,
  Tag,
  Descriptions,
  Button,
  Space,
  Divider,
  Typography,
} from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
  EditOutlined,
  LinkedinFilled,
  SmileOutlined,
  GlobalOutlined,
  TrophyOutlined,
  StarOutlined,
  SecurityScanFilled,
  ExceptionOutlined,
  ContactsFilled,
  InstagramFilled,
  FacebookFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import "./UserProfile.css";
import isha from "../assets/isha.jpg";
import akash from "../assets/akash.jpg";
const users = [
  {
    pImg: akash, // replace with your imported image
    name: "AKASH CHAVHAN",
    role: "Full Stack Developer",
    email: "akashchavhan512786@gmail.com",
    phone: "+91 9657401872",
    location: "Pune, Maharashtra",
    linkedin: "https://www.linkedin.com/in/akashchavhan/",
    languages: ["English", "Hindi", "Marathi"],
    skills: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "MySQL",
      "React.js",
      "Bootstrap",
      "HTML/CSS",
      "JavaScript",
    ],
    hobbies: ["Learning New Technologies", "Exploring Startups"],
    softSkills: ["Teamwork", "Leadership", "Time Management", "Communication"],
    achievements: [
      "Magazine Secretary in College",
      "Completed Multi-Vendor E-commerce Project",
      "Built Employee Management System",
    ],
    summary:
      "Passionate and self-motivated Full Stack Developer based in Pune with expertise in building scalable web applications using React and Spring Boot. Strong foundation in backend and frontend technologies, with a keen eye for user-centric design and clean code.",
  },
  {
    pImg: isha,
    name: "ISHA ANAND BRAMHANE",
    role: "HR Manager @AGM Realty",
    email: "bramhaneisha02@gmail.com",
    phone: "+91 7517528735",
    location: "Pune, Maharashtra",
    linkedin: "www.linkedin.com/in/isha",
    languages: ["English", "Hindi", "Marathi"],
    skills: [
      "End-to-end Recruitment",
      "Candidate Sourcing",
      "Interview Coordination",
      "Onboarding Support",
      "Communication",
      "Basic Java",
      "Manual Testing",
    ],
    hobbies: ["Dancing"],
    softSkills: ["Team Work", "Good Communication Skill"],
    achievements: ["Best Performer Award - 2023(Dance)"],
    summary:
      "Detail-oriented HR Recruiter based in Pune with a background in Computer Applications. Skilled in sourcing, screening, and coordinating interviews. Strong communication skills and a passion for creating a smooth and efficient hiring experience.",
  },
];
const { Title, Paragraph } = Typography;

const UserProfile = () => {
  const [user, setUser] = useState(users[0]);
  const [bgi, setBgi] = useState("rgb(167, 179, 245)");
  const [bgs, setBgs] = useState("rgb(167, 179, 245)");
  // 🟢 Set default user to "User 1" when component mounts
  useEffect(() => {
    setUser(users[0]);
    setBgi("green");
  }, []); // empty array = only on first render
  const handleIShaClick = () => {
    setUser(users[0]); // Set to "User 2"
    setBgi("green");
    setBgs("rgb(167, 179, 245)");
  };
  const handleSaloniClick = () => {
    setUser(users[1]); // Set to "User 2"
    setBgs("green");
    setBgi("rgb(167, 179, 245)");
  };
  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <Button
          danger
          type="primary"
          onClick={handleIShaClick}
          style={{ marginRight: "10px", backgroundColor: bgi }}
        >
          AKASH
        </Button>
        <Button
          type="primary"
          onClick={handleSaloniClick}
          style={{ backgroundColor: bgs }}
        >
          ISHA
        </Button>
      </div>
      <div className="profile-container">
        <Card className="profile-card" bordered={false}>
          <div className="profile-header">
            <Avatar size={100} src={user.pImg} />
            <div className="header-text">
              <Title
                level={3}
                className="name"
                style={{ color: "rgb(244, 94, 78)" }}
              >
                {user.name}
              </Title>
              <p className="role-text">{user.role}</p>
              <div className="social-links">
                <a
                  href={`https://${user.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "12px" }}
                >
                  <LinkedinFilled
                    style={{ color: "#0077B5", fontSize: "24px" }}
                  />
                </a>
                <a
                  href={`https://www.instagram.com/${user.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "12px" }}
                >
                  <InstagramFilled
                    style={{ color: "#E4405F", fontSize: "24px" }}
                  />
                </a>
                <a
                  href={`https://www.facebook.com/${user.facebook}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "12px" }}
                >
                  <FacebookFilled
                    style={{ color: "#1877F2", fontSize: "24px" }}
                  />
                </a>
                <a
                  href={`https://twitter.com/${user.twitter}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "12px" }}
                >
                  <TwitterSquareFilled
                    style={{ color: "#1DA1F2", fontSize: "24px" }}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="heading-with-icon">
            <ContactsFilled />
            <span className="heading-text">Contact Details</span>
          </div>
          <Descriptions
            column={1}
            bordered
            size="small"
            className="profile-descriptions"
          >
            <Descriptions.Item label={<MailOutlined className="icon-mail" />}>
              {user.email}
            </Descriptions.Item>
            <Descriptions.Item label={<PhoneOutlined className="icon-phone" />}>
              {user.phone}
            </Descriptions.Item>
            <Descriptions.Item
              label={<HomeOutlined className="icon-location" />}
            >
              {user.location}
            </Descriptions.Item>
          </Descriptions>
          <br />
          <div className="heading-with-icon">
            <ExceptionOutlined />
            <span className="heading-text"> Professional Summary</span>
          </div>
          <hr />
          <Paragraph className="summary-text">{user.summary}</Paragraph>
          <br />
          <div className="heading-with-icon">
            <GlobalOutlined />
            <span className="heading-text"> Languages</span>
          </div>
          <hr />
          <Space wrap>
            {user.languages.map((lang, idx) => (
              <Tag color="magenta" key={idx}>
                {lang}
              </Tag>
            ))}
          </Space>
          <br />
          <br />
          <div className="heading-with-icon">
            <SecurityScanFilled />
            <span className="heading-text"> Skills</span>
          </div>
          <hr />
          <Space wrap>
            {user.skills.map((skill, idx) => (
              <Tag key={idx} color="blue">
                {skill}
              </Tag>
            ))}
          </Space>
          <br />
          <br />
          <div className="heading-with-icon">
            <SmileOutlined /> <span className="heading-text"> Hobbies</span>
          </div>
          <hr />
          <Space wrap>
            {user.hobbies.map((hobby, idx) => (
              <Tag key={idx} color="volcano">
                {hobby}
              </Tag>
            ))}
          </Space>
          <br />
          <br />
          <div className="heading-with-icon">
            <TrophyOutlined />{" "}
            <span className="heading-text">Achievements</span>
          </div>
          <hr />
          <Space wrap>
            {user.achievements.map((ach, idx) => (
              <Tag key={idx} color="gold">
                {ach}
              </Tag>
            ))}
          </Space>
          <br />
          <br />
          <div className="heading-with-icon">
            <StarOutlined />
            <span className="heading-text"> Soft Skills</span>
          </div>

          <hr />
          <Space wrap>
            {user.softSkills.map((skill, idx) => (
              <Tag key={idx} color="cyan">
                {skill}
              </Tag>
            ))}
          </Space>
          {/* <div className="action-section">
          <Button type="primary" icon={<EditOutlined />}>
            Edit Profile
          </Button>
        </div> */}
        </Card>
      </div>
    </>
  );
};

export default UserProfile;
