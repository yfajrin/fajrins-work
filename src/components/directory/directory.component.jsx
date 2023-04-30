import DirectoryItem from '../directory-item/directory-item.component';
import {DirectoriesContainer} from './directory.styles';

const categories = [
  {
    id: 1,
    title: "indonesia",
    imageUrl: "https://i.ibb.co/C8j27n0/indonesian-coffee.png",
    route: "shop/indonesia" 
  },
  {
    id: 2,
    title: "jamaica & guatemala",
    imageUrl: "https://i.ibb.co/2Zs4ypm/jamaica-guatemala-coffee.png",
    route: "shop/jamaica%20&%20guatemala"
  },
  {
    id: 3,
    title: "ethiopia",
    imageUrl: "https://i.ibb.co/DfQwwyD/ethiopia-coffee.png",
    route: "shop/ethiopia"
  },
  {
    id: 4,
    title: "brazil",
    imageUrl: "https://i.ibb.co/wSd0Nmx/brazil-coffee.png",
    route: "shop/brazil"
  },
  {
    id: 5,
    title: "colombia",
    imageUrl: "https://i.ibb.co/Y25Q0Ks/colombia-coffee.png",
    route: "shop/colombia"
  },
  {
    id: 6,
    title: "vietnam",
    imageUrl: "https://i.ibb.co/MpV7wc5/vietnam-coffee.png",
    route: "shop/vietnam"
  }
]

const Directory = () => {
    return (
        <DirectoriesContainer>
        {categories.map((category) => (
         <DirectoryItem key={category.id} category={category} />
        ))}
      </DirectoriesContainer>
    )

}

export default Directory