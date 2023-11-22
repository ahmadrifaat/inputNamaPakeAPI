"use client";
import "@style/diary.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Diary() {
  const [judul, setJudul] = useState([]);
  const [isiDiary, setIsiDiary] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Tambahkan state isLoading

  const endpointAPI = "https://6555c0d584b36e3a431e3eba.mockapi.io/diaryku";

  async function getDiary() {
    try {
      const res = await axios.get(endpointAPI);
      const data = res.data;

      // Ambil judul
      const judul = data.map((item) => item.title);
      setJudul(judul);

      // Ambil isi_diary
      const isi_diary = data.map((item) => item.pragraph);
      setIsiDiary(isi_diary);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false); // Set isLoading menjadi false setelah fetching selesai
    }
  }

  useEffect(() => {
    getDiary();
  }, []);

  return (
    <div className="diary-list-container">
      {isLoading ? (
        "API is loading"
      ) : judul.length > 0 ? (
        <ul>
          {judul.map((item, idx) => (
            <li key={idx}>
              <div className="diary-container">
                <h1>{judul[idx]}</h1>
                <p className="p-diary">{isiDiary[idx]}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        "No data available"
      )}
    </div>
  );
}
