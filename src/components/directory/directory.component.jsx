import DirectoryItem from '../directory-item/directory-item.component';
import {DirectoriesContainer} from './directory.styles';

const Directory = ({ categories }) => {
    return (
        <DirectoriesContainer>
        {categories.map((category) => (
         <DirectoryItem key={category.id} category={category} />
        ))}
      </DirectoriesContainer>
    )

}

export default Directory