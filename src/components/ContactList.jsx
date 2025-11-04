import { useState } from "react";
import useContactBookStore from "../stores/useContactBookStore";
import { Input } from "@mui/material";
import ContactCard from "./ContectCard";
const ContactList = () => {
  const [search, setSearch] = useState("");
  const { contactBook } = useContactBookStore();


  const result = contactBook.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="list-wrapper">
      <div className="list-box">

        <div className="list-head">
          <h2> Conteact List </h2>
        </div>

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
            <div item={item}>
              <ContactCard  item={item} />
            </div>              
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactList;
