import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  gap: 5px;
  justify-content: space-between;
  flex-direction: column;
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  ${mobile({flexDirection: 'column'})}
`

const Title = styled.h2``

const Categories = () => {
  return (
    <Container>
      <div>
        <Title>Categories</Title>
      </div>
      <CategoriesContainer>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </CategoriesContainer>
    </Container>
  );
};

export default Categories;
