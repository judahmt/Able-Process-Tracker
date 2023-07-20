import GrayButton from "@/components/gray-button";
import SectionBreak from "@/components/section-break";
import Partner from "@/components/partner";
import TaskBox from "@/components/task-box";
import TaskForm from "@/components/task-form";
import Task from "@/models/task";

const Home = () => {
  const myTask = new Task('JohnDoe@Able.co','JaneSmith@company.com','NDA',
  '25-07-2023','High','Please review on www.nda-info.com and provide feedback');

  return (
    <div>
      <div className="flex items-center justify-center py-5">
        <GrayButton text={'Add Partner'} size={'bg'} />
      </div>
      <SectionBreak />
      <Partner name={'Company Name'}/>
      <SectionBreak />
      <TaskBox task={myTask}/>
      <SectionBreak></SectionBreak>
      <TaskForm></TaskForm>
    </div>
  )
}

export default Home;