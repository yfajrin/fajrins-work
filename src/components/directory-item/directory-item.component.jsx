import {DirectoryBodyContainer, DirectoryContainer, BackgroundImage} from './directory-item.styles'

const DirectoryItem = ({ category }) => {
    const { title, imageUrl } = category
    return (
        
        <DirectoryContainer>
        <BackgroundImage imageUrl={imageUrl}/>
        <DirectoryBodyContainer>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </DirectoryBodyContainer>
      </DirectoryContainer>
      
    )
}

export default DirectoryItem