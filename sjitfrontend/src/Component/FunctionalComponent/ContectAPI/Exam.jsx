import Faculty from "./Faculty";
import CoE from "./CoE";
import StudentResults from "./StudentResults";

const Exam = () => {
    return (
        <div>
            <h1>Students are Writing Exam</h1>
            <Faculty/>
            <CoE/>
            <StudentResults sgpa="10 SGPA" cgpa="10 CGPA"/>
        </div>
    );  
}

export default Exam;
