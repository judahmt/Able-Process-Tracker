import GrayButton from "@/components/gray-button";
import SectionBreak from "@/components/section-break";
import Partner from "@/components/partner";
import TaskBox from "@/components/task-box";

const Home = () => {
  
  const myTask = {
    sender: 'JohnDoe@Able.co',
    receiver: 'JaneSmith@company.com',
    documentType: 'NDA',
    urgency: 'High',
    deadline: '25-07-2023',
    additionalInfo: 'Please review on www.nda-info.com and provide feedback'
  }

  return (
    <div>
      <div className="flex items-center justify-center py-5">
        <GrayButton text={'Add Partner'} size={'bg'} />
      </div>
      <SectionBreak />
      <Partner name={'Company Name'}/>
      <SectionBreak />
      <TaskBox task={myTask}/>
    </div>
  )
}

export default Home;