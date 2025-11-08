import React from 'react'
import { style } from 'postcss-minify-font-values/types/lib/keywords';

export default function StoryModal() {
  return (
    <div style={{width: '100vw',height:'100vh', backgroundColor:'rgba(0,0,0,0.1)',
        display:'flex',justifyContent: 'center', alignItems: 'center'
    }}>
        
        <div style={{width:'100vw', height:'90vh', display: 'flex', flexDirection:'row',justifyContent: 'space-between', alignItems: 'center'}}>
            {/* 이전 */}
            <div style={{width:'6%', height:'100%',display: 'flex',alignItems: 'center'}}>
                <button>화살표</button>
            </div>
            {/* article */}
            <div style={{display:"flex", justifyContent:'center', alignItems:'center',
                        width:'80%', height:'100%'}}>
                {/* 미디어 */}
                <div style={{display:"flex", justifyContent:'left', alignItems:'center',width:'100%', height:'100%', backgroundColor: 'black'}}>
                    <div style={{width:'100%', height:'100%', display:"flex", justifyContent:'center', alignItems:'center', backgroundColor: 'red', paddingLeft:'10px'}}>
                        콘텐츠
                    </div>
                </div>
                {/* 내용 및 댓글 */}
                <div style={{width:'499px', height:'100%',marginRight:'20px', backgroundColor: 'pink'}}>
                    {/* 내용 */}
                    <div>미니 프로필 </div>
                    {/* 댓글 리스트 */}
                    <div>프로필이미지 | 아이디 | 댓글</div>

                    {/* 하단 좋아요 / 댓글 / 보내기 / 저장 */}
                    <div>좋아요 버튼 | 댓글 |  보내기 | 저장</div>

                    {/* 댓글 달기 영역 */}
                    <div> 댓글 달기 영역</div>
                </div>
            </div>

            {/* 다음 */}
            <div style={{width:'6%', height:'100%',display: 'flex',alignItems: 'center'}}>
                <button>화살표</button>
            </div>
        </div>

    </div>
  )
}
