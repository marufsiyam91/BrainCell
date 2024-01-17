import { useState } from "react";
import styles from "./AddTask_Form.module.css";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../../Firebase/FirebaseConfig";

const AddTask_Form = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    links: "",
    description: "",
    images: "",
  });

//   const [storedData, setStoredData] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({
      ...taskData,
      [name]: value,
    });
    console.log(taskData);
  };


  const handleSubmit = async(e) => {
     e.preventDefault()
     console.log(taskData)
     // setStoredData({...taskData})
     const docData = {...taskData}
     try{
          await setDoc(doc(db, "Tasks", "LA"),docData);
             console.log('data submitted')
     }catch(err){
          console.log(err)
     }
     console.log(taskData)
  }

  return (
    <div onSubmit={handleSubmit} className={styles.addtask_form_wrapper}>
      <div className={styles.addtask_form_container}>
        <form className={styles.addtask_form}>
          <h2>
            <i>Add task from your brain</i>
          </h2>
          <label>
            Title
            <input
              onChange={handleChange}
              value={taskData.title}
              type="text"
              name="title"
              placeholder="Add Title"
            />
          </label>

          <label>
            Links
            <input
              onChange={handleChange}
              value={taskData.links}
              type="text"
              name="links"
              placeholder="Add Links"
            />
          </label>

          <label>
            Choose image
            <input
              onChange={handleChange}
              value={taskData.images}
              className={styles.addtask_image}
              name="images"
              type="file"
              placeholder="Add Images"
            />
          </label>

          <label>
            Description
            <textarea
              onChange={handleChange}
              value={taskData.description}
              name="description"
              id=""
              cols="85"
              rows="10"
            ></textarea>
          </label>

          <button className={styles.task_btn}>Add Task</button>
        </form>
      </div>
    </div>
  );
};

export default AddTask_Form;
