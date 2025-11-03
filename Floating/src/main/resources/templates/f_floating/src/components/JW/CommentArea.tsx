import Modal from 'react-modal'
import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import './css/CommentArea.css'
import closeBtn from './img/x.svg'
import { X } from 'lucide-react'

const CommentArea = ({onClose} : {onClose: () => void}) => {

    const comments: string[] = Array.from({ length: 30 }, (_, i) => `${i + 1}번째 댓글입니다.`);
    const [isOpen, setIsOpen] = useState<boolean>(true);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
          // 모달 닫을 때 body 스크롤 복원
          document.body.style.overflow = 'auto';
        };
      }, []);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '850px',
            height: '700px',
            padding:' 0px',
            margin:' 0px'
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }
    };

    return (
        <div>

            <button
                className="overlay-close-btn"
                onClick={onClose}
            >
                <X size={30} color='white'/>
            </button>

            <Modal
                isOpen={isOpen}
                onRequestClose={onClose}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
            >

                <div className="layout">
                    {/* 왼쪽 화면 */}
                    <div className="left"></div>

                    {/* 오른쪽 댓글 패널 */}
                    <div className="right">
                        <div className="right-top">상단 박스</div>

                        <div className="right-list" style={{ maxHeight: 'calc(650px - 50px - 60px)', overflowY: 'auto' }}>
                        {comments.map((comment, index) => (
                            <div key={index} className="item">
                                {comment}
                            </div>
                        ))}
                        </div>

                        <div className="right-bottom">

                        </div>
                        <div className='comment-area'>
                            <input className="comment-input" placeholder="댓글 입력..." />
                            <button className="comment-btn">등록</button>
                        </div>
                    </div>
                </div>

            </Modal>
        </div>
    )

}

export default CommentArea;