import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Collection } from '../../models';
import * as S from './CollectionsList.styles';
import { urlEncode } from '../../common';

interface CollectionsListProps {
  collections: Collection[];
}

const CollectionsList: FC<CollectionsListProps> = ({ collections }) => (
  <S.CollectionsListWrapper data-testid='CollectionsList'>
    {collections.map(collection => (
      <S.CollectionsListCard key={collection?.collectionDict?.id}>
        <Link to={urlEncode(`/collection-detail/${collection?.collectionDict?.name}`)}>
          <S.CollectionsListCardImgContainer>
            <S.CollectionsListCardImg src={collection?.first_nft?.imageUrl} />
          </S.CollectionsListCardImgContainer>
          <S.CollectionsListCardDetails>
            <S.CollectionsListCardTitle>{collection?.collectionDict?.displayName}</S.CollectionsListCardTitle>
            <S.CollectionsListCardItemNum>{collection?.total} Item{collection?.total > 1 ? 's' : ''}</S.CollectionsListCardItemNum>
          </S.CollectionsListCardDetails>
        </Link>
      </S.CollectionsListCard>
    ))}
    {collections.length === 0 && (
      <S.CollectionsListNoResults>No Collections Found!</S.CollectionsListNoResults>
    )}
  </S.CollectionsListWrapper>
);

export default CollectionsList;
