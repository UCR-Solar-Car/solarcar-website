import React, { useEffect, useState } from "react";
import { db } from "../firebase.js";
import { getDocs, collection } from "firebase/firestore";

const Test = () => {
  const [data, setdata] = useState([]);
  const test = async () => {
    const snapshot = await getDocs(collection(db, "test"));
    snapshot.forEach((ss) => {
      setdata([...data, ss.data()]);
    });
  };
  useEffect(() => {
    console.log("lool");
    test();
  }, []);
  return (
    <div>
      {data?.map((d, index) => {
        return (
          <>
            <div>{d.test1}</div>
          </>
        );
      })}
    </div>
  );
};

export default Test;
