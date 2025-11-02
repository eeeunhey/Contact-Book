import { TextField, Box, Button } from "@mui/material";
import { useState } from "react";
import useContactBookStore from "../stores/useContactBookStore";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [githubId, setGithubId] = useState("");
  const [email, setEmail] = useState("");
  const [githubData, setGithubData] = useState(null);

  const { addContact } = useContactBookStore();

  const handleAddContact = () => {
    if (!name.trim() || !phoneNumber.trim()) return;
    addContact(name, phoneNumber, email, githubId);
  };

  const getSearchGit = async () => {
    if (!githubId.trim()) return alert("GitHub 사용자명을 입력하세요.");
    try {
      const url = `https://api.github.com/users/${encodeURIComponent(
        githubId
      )}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data && !data.message) {
        setGithubData({
          login: data.login,
          name: data.name,
          html_url: data.html_url,
          avatar_url: data.avatar_url,
        });
      } else {
        setGithubData(null);
        alert("사용자를 찾을 수 없어요.");
      }
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <Box className="form-wrapper">
      <div className="form-box">
        <div className="field-col">
          <div className="row-2">
            <TextField
              label="이름 "
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
            />
            <TextField
              label="전화번호 "
              fullWidth
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="form-input"
            />
          </div>

          <TextField
            label="이메일"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />

          <div className="github-row-simple">
            <TextField
              id="github"
              label="GitHub ID"
              fullWidth
              value={githubId}
              onChange={(e) => setGithubId(e.target.value)}
              className="form-input"
            />
            <Button
              id="btnSearchGH"
              variant="outlined"
              size="medium"
              onClick={getSearchGit}
              className="btn small"
            >
              검색
            </Button>
          </div>

          {githubData && (
            <div className="gh-preview">
              <img
                className="avatar-sm"
                src={githubData.avatar_url}
                alt="GitHub avatar"
              />
              <div>
                <div className="gh-name">
                  {githubData.name || githubData.login}
                </div>
                <a
                  className="link"
                  href={githubData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  프로필 보기
                </a>
              </div>
            </div>
          )}

          <div className="form-actions">
            <Button
              variant="contained"
              size="large"
              onClick={handleAddContact}
              className="form-btn-primary"
            >
              리스트에 추가
            </Button>
          </div>
        </div>
      </div>
    </Box>
  );
};
