import useContactBookStore from "../stores/useContactBookStore";
import { Button } from "@mui/material";

const ContactCard = ({ item }) => {
  const deleteContact = useContactBookStore((state) => state.deleteContact);

  return (
    <div className="contact-card">
      <p className="contact-name">
        <span className="tag">이름</span> {item?.name}
      </p>

      {item?.email && (
        <p className="contact-info">
          <span className="tag">📧 이메일</span> {item?.email}
        </p>
      )}

      {item?.phoneNumber && (
        <p className="contact-info">
          <span className="tag">📞 전화번호</span> {item?.phoneNumber}
        </p>
      )}

      {item?.githubId && (
        <p className="contact-info">
          <span className="tag">🐙 GitHub</span>
          <a
            href={`https://github.com/${item.githubId}`}
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            {item?.githubId}
          </a>
        </p>
      )}

      <div>
        <Button
          variant="contained"
          size="large"
          onClick={() => deleteContact(item?.id)}
          className="form-btn-primary"
        >
          리스트에 추가
        </Button>
      </div>
    </div>
  );
};

export default ContactCard;
