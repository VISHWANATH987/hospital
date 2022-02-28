import React from 'react'

function ScheduleAppointmentDiv() {

    const lists = [
        {
            "id": 1,
            "dname": "Dr. Vishwanath",
        },
        {
            "id": 2,
            "dname": "SOURABHA SAVADATTI",
        }
                ]

  return (
    <div className='ScheduleAppDiv'>
          <div className='ScheduleAppInnerDiv'>
          <div className='ScheduleAppInnerDivTitle'>
                  SCHEDULE APPOINTMENT
          </div>
          <div className='ScheduleAppInnerDivTop'>
                <div className='ScheduleAppInnerDivTopSelect'>
                    <div className='ScheduleAppInnerDivTopSelectPatient'>
                        <select className='ScheduleAppInnerDivTopSelectPatientOptions'>
                            <option value="apple">apple</option>
                            <option value="mango">mango</option>
                            <option value="orange">orange</option>
                        </select>
                    </div>
                    <div className='ScheduleAppInnerDivTopSelectDoctor'>
                    <select className='ScheduleAppInnerDivTopSelectDoctorOptions'>
                            <option value="apple">apple</option>
                            <option value="mango">mango</option>
                            <option value="orange">orange</option>
                        </select>
                    </div>
                </div>
                <div className='ScheduleAppInnerDivTopSlot'>
                    <div className='ScheduleAppInnerDivTopSlotTop'>
                        
                            <div className='ScheduleAppInnerDivTopSlotTopslot8to9'>
                            <div className='ScheduleAppInnerDivTopSlotTopInner8to9'>
                                <div className='ScheduleAppInnerDivTopSlotTopslot8to9top'>
                                8 AM TO 9 AM
                            </div>
                            <div className='ScheduleAppInnerDivTopSlotTopslot8to9bottom'>
                                STATUS....
                            </div>
                            </div>

                           
                            </div>
                    
                        
                        <div className='ScheduleAppInnerDivTopSlotTopslot9to10'>
                             <div className='ScheduleAppInnerDivTopSlotTopInner9to10'>
                                 <div className='ScheduleAppInnerDivTopSlotTopslot9to10top'>
                                9 AM TO 10 AM
                            </div>
                            <div className='ScheduleAppInnerDivTopSlotTopslot9to10bottom'>
                                STATUS....
                            </div>
                             </div>
                        
                        </div>
                        <div className='ScheduleAppInnerDivTopSlotTopslot10to11'>
                            <div className='ScheduleAppInnerDivTopSlotTopInner10to11'>
                                <div className='ScheduleAppInnerDivTopSlotTopslot10to11top'>
                                10 AM TO 11 AM
                            </div>
                            <div className='ScheduleAppInnerDivTopSlotTopslot10to11bottom'>
                                STATUS....
                            </div>
                            </div>
                        
                        </div>
                    </div>
                    <div className='ScheduleAppInnerDivTopSlotBottom'>
                        <div className='ScheduleAppInnerDivTopSlotTopslot11to12'>
                            <div className='ScheduleAppInnerDivTopSlotTopInner11to12'>
                                <div className='ScheduleAppInnerDivTopSlotTopslot11to12top'>
                            11 AM TO 12 PM
                            </div>
                            <div className='ScheduleAppInnerDivTopSlotTopslot11to12bottom'>
                                STATUS....
                            </div>
                            </div>
                        
                        </div>
                        <div className='ScheduleAppInnerDivTopSlotTopslot12to1'>
                            <div className='ScheduleAppInnerDivTopSlotTopInner12to1'>
                                <div className='ScheduleAppInnerDivTopSlotTopslot12to1top'>
                                12 PM TO 1 PM
                            </div>
                            <div className='ScheduleAppInnerDivTopSlotTopslot12to1bottom'>
                                STATUS....
                            </div>
                            </div>
                        
                        </div>
                        <div className='ScheduleAppInnerDivTopSlotTopslot1to2'>
                            <div className='ScheduleAppInnerDivTopSlotTopInner1to2'>
                                <div className='ScheduleAppInnerDivTopSlotTopslot1to2top'>
                                1 PM TO 2 PM
                            </div>
                            <div className='ScheduleAppInnerDivTopSlotTopslot1to2bottom'>
                                STATUS....
                            </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
          </div>
            <div className='ScheduleAppInnerDivBottom'>

            </div>
          </div>
            
          </div>
  )
}

export default ScheduleAppointmentDiv