import { Modal, Button } from "@toss/tds-mobile";
//import { useEffect } from "react";
import { Noticification } from "./Type";
import { useEffect, useState } from "react";
import { supabase } from "./SupabaseClient";
interface NoticeModalProps{
    setOpenModal:(value:boolean)=>void;
    OpenModal : boolean;
}

const NoticeModal = ({setOpenModal, OpenModal }:NoticeModalProps) =>{
    const [noticeData, setNoticeData] = useState<Noticification|null>(null);
    useEffect(()=>{
        const fetchNotice=async () =>{
            try{
                const {data, error:supabaseError} = await supabase
                .from('notice')
                .select('*')
                .order('created_at', {ascending:false})
                .limit(1);
                if (supabaseError) throw supabaseError;
                if(data && data.length>0){ 
                const NoticeData = data[0].NoticeComment as Noticification;
                setNoticeData(NoticeData);
                }
            } catch (error) {
            console.error("에러 발생:", error);
        }
        };
        fetchNotice();
    }, [])
    /*useEffect(() => {
        console.log("실제 바뀐 noticeData 상태:", noticeData);
    }, [noticeData]);  //noticeData가 바뀔 때마다 이 로그가 찍힙니다.*/
    const currentNotice = noticeData==null?['불러오는 중']:noticeData.notice[0];
    return(
        <Modal open ={OpenModal} onOpenChange = {setOpenModal}>
            <Modal.Overlay />
            <Modal.Content style={{
                padding: '32px 20px 20px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'                            
            }}>  
                <div>
                    {currentNotice.map((notice, index)=>(
                        <div key ={index}>
                            <p>
                                {notice}
                            </p>
                        </div>
                    ))}
                </div>
                <Button display="block" color="primary" onClick={()=>setOpenModal(false)}>
                    닫기
                </Button>
            </Modal.Content>
        </Modal>
    );
}
export default NoticeModal;