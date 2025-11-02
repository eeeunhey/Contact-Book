import { useState } from "react";
import useContactBookStore from "../stores/useContactBookStore";
import { Input } from "@mui/material";

const ContactList = () => {
  const [search, setSearch] = useState("");
  const { contactBook } = useContactBookStore();

  // 검색어가 포함된 연락처만 필터링
  const result = contactBook.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="list-wrapper">
      <div className="list-box">
        {/* 제목 + 설명(선택) */}
        <div className="list-head">
          <h2> 연락처 목록</h2>
        </div>

        {/* 검색 입력줄 */}
        <div className="search-row">
          <Input
            type="text"
            placeholder="검색 (이름)"
            className="list-search"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSearch(e.target.value);
              }
            }}
          />
        </div>
        <div className="contact-list">
          {result.length === 0 && <p>검색 결과가 없습니다.</p>}

          {result.map((item) => (
            <div key={item.id} className="card">
              <p>{item.name}</p>
              {item.email && <p>{item.email}</p>}
              {item.phoneNumber && <p>{item.phoneNumber}</p>}
              {item.githubId && <p>GitHub: {item.githubId}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactList;
