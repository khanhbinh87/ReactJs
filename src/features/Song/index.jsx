import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id:1,
            name:"IDM",
            thumbnailUrl:"https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/e/9/f/2e9f3f40e5a70a96a4e5622e30148853.jpg"
        },
        {
            id:2,
            name:"Nhac Dance",
            thumbnailUrl:"https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/3/6/1/8361592b9657517cc974b08560d53533.jpg"
        },
        {
            id:1,
            name:"K-Pop",
            thumbnailUrl:"https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/5/a/5/45a51048caf45da54cf18043c7d6024f.jpg"
        },
    ]
    return (
        <div>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;