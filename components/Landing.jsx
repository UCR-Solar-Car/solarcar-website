import { doc, getDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { db } from "../firebase";

const Landing = () => {
  useEffect(() => {
    const testData = async () => {
      const response = await getDoc(doc(db, "test", "testdocument"));
      console.log(response.data());
    };

    testData();
  }, []);

  return <div>dummy</div>;
};

export default Landing;
