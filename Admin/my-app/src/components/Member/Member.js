import React,{useContext} from 'react'
import { Context } from '../../context'
import MemberPeople from '../MemberPeople/MemberPeople'
import "./member.scss"

const Member = () => {
    const {people} = useContext(Context)
    return (
        <div>
            <div className='parennt-of-member'>
                 <div className='members'>
                     <h3 className='members-text'>New Join Members</h3>
                     {people.map(el => {
                         return (
                             <div key={el.id}>
                               <MemberPeople el={el}/>
                                 <div  className='el'>
                                    <img className='el-image' src={el.image} alt=""/>
                                    <div>
                                        <h5 className='h5-title-name'>{el.name}</h5>
                                        <h6>{el.age}</h6>
                                    </div>
                                    <button className='el-button'>Display</button>
                                 </div>
                             </div>
                         )
                     })}
                 </div>
     
                 <div className='the-parent-of-main-section-third'>
                     <h3 className='the-lider-text'>Latest transactions</h3>
                     <div className='parent-of-the-texts'>
                         <h5 className='text-last'>Customer</h5>
                         <h5 className='text-last'>Date</h5>
                         <h5 className='text-last'>Amount</h5>
                         <h5 className='text-last'>Status</h5>
                     </div>
                     <div>
                     {people.map(el => {
                         return (
                             <div key={el.id}>
                               <MemberPeople el={el}/>
                                 <div key={el.id} className='elem'>
                                     <div className='image-and-text'>     
                                        <img className='el-image' src={el.image} alt=""/>
                                        <h5 className='elem-title-name'>{el.name}</h5>
                                    </div>
                                    <div>
                                        <h5>{el.date}</h5>
                                    </div>
                                    <div>
                                         <h5>{el.amount}</h5>
                                    </div>
                                    <div>
                                        <button className={`btn-status ${
                                            el.status == 'Approved' ? 'first-btn' : el.status == 'Declined' ? 'second-btn' : "third-btn" 
                                        } first-btn`}>{el.status}</button>
                                    </div>
                                 </div>
                             </div>
                         )
                     })}
                     </div>
                 </div>
            </div>
        </div>
    )
}

export default Member
