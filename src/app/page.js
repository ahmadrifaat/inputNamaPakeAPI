"use client"

import { useAmp } from "next/amp";
import Image from "next/image";
import "@style/home.css";
import { useState } from "react";

export default function Home() {
  // const [bravo, setBravo] = useState(0)
  // State untuk menyimpan ketikan setelah tombol submit ditekan
  const [nama, setNama] = useState("Ahmad Rifaat");
  // State untuk menerima inputan temporer dari <input>
  const [inputNewName, setNewName] = useState("");
  const submitDisabled = inputNewName.trim() === '';
  

  function handlerTambahNama() {
    // setBravo(bravo + 1)
    setNama(inputNewName);
    setNewName("");
  }
  function handlerGantiNama(event) {
    event.preventDefault();
    setNewName(event.target.value);
  }

  function handlerKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handlerTambahNama();
    }
  }

  return (
    <>
      <div className="body">
        <div className="banner-container">
          {/* kartunya */}
          <div className="header-banner-wrapper">
            {/* foto ptofil dan nama */}
            <div className="profile-banner">
              {/* foto profil */}
              <Image
                src="/asset/mazr.jpeg"
                alt="Picture of the author"
                fill
                objectFit="contain"
              />
            </div>
            <div className="content-header-banner">
              {/* nama dan kawan kawan */}
              <h1>{nama}</h1>
              <div className="bio-nim-header-banner">
                {/* nim-bio */}
                <p>D121211026</p>
                <p>Kerja bagus</p>
              </div>
            </div>
          </div>
          <div className="input-name">
            <form>
              <input
                type="text"
                placeholder="Tuliskan namamu !"
                name="search"
                onChange={handlerGantiNama}
                value={inputNewName}
                onKeyDown={handlerKeyDown}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "12px",
                }}
              />
            </form>
          </div>
          <div className="cta-banner-wrap">
            {/* tombol cta */}
            <button className={`cta-button ${submitDisabled ? 'disabled' : 'active'}`}
            onClick={submitDisabled ? null : handlerTambahNama}>
              <p>{submitDisabled ? 'Disable' : 'Submit'}</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
