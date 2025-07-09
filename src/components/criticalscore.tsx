import React from 'react'
import { BsArrowsAngleExpand } from 'react-icons/bs';
import { Badge } from '@chakra-ui/react';

interface CriticalScoreProps {
  score: number;
}

const CriticalScore = ({ score }: CriticalScoreProps) => {
    const colorScheme = score > 75 ? 'green' : score > 60 ? 'yellow' : '';
    return (
        <Badge colorScheme={colorScheme} fontSize='14px' paddingX={2} borderRadius='2px'>
            {score}
        </Badge>
    )
}

export default CriticalScore;