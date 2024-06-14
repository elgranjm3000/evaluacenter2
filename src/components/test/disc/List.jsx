import React, { useState, useEffect } from 'react';
import { getMyEvaluationDisc } from '../../../api/api';
import './App.css'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'; // Importa el nuevo icono
import { Box, LinearProgress, Typography } from '@mui/material';

const ProgressBar = ({ value }) => {
    return (
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" value={value} />
        </Box>
        
      </Box>
    );
  };
const List = ({ profileData, steps, valueProgress }) => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            if (profileData && profileData.userInfo.user_id) {
                try {
                    const response = await getMyEvaluationDisc(profileData.jwt_token);
                    const numericSteps = Number(steps); // Convertir steps a número

                    console.log(response.data.questions[numericSteps].answers);
                    setItems(response.data.questions[numericSteps].answers);
                } catch (error) {
                    // Manejo de errores
                } finally {
                    // Cualquier limpieza necesaria
                }
            }
        };
        fetchData();
    }, [profileData, steps]); // Añadir steps como dependencia

   

    const [draggingItem, setDraggingItem] = useState(null);

    const handleDragStart = (e, item) => {
        setDraggingItem(item);
        e.dataTransfer.setData('text/plain', '');
    };

    const handleDragEnd = () => {
        setDraggingItem(null);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, targetItem) => {
        if (!draggingItem) return;

        const currentIndex = items.indexOf(draggingItem);
        const targetIndex = items.indexOf(targetItem);

        if (currentIndex !== -1 && targetIndex !== -1) {
            const updatedItems = [...items];
            updatedItems.splice(currentIndex, 1);
            updatedItems.splice(targetIndex, 0, draggingItem);
            setItems(updatedItems);
        }
    };

    return (
        <>
        <div>
      <Typography variant="h6" gutterBottom>
       /24
      </Typography>
      <ProgressBar value="25" />
    </div>
        <div className="sortable-list">
            {items.map((item) => (
                <div
                    key={item.id}
                    className={`item ${item === draggingItem ? 'dragging' : ''}`}
                    draggable="true"
                    onDragStart={(e) => handleDragStart(e, item)}
                    onDragEnd={handleDragEnd}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, item)}
                >
                    <DragIndicatorIcon style={{color:"black"}} />
                    <div className="details" style={{ color: 'black' }}>
                        <span>{item.text}</span>
                    </div>
                    
                </div>
            ))}
        </div>
        </>
    );
} 
  
export default List;