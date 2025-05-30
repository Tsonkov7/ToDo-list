import express from 'express';
import cors from 'cors';
import pool from './db.js';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


//Routes//
//create a new todo
app.post('/todos', async (req, res) => {
   try {
    console.log(req.body);
        const { description } = req.body;
        const newTodo = await pool.query(
            'INSERT INTO todo (description) VALUES ($1) RETURNING *',
            [description]
        );      
    res.json(newTodo.rows[0]);
    console.log('Todo created successfully:', newTodo.rows[0]);
       

   } catch (err) {
       console.error(err.message);
       res.status(500).send('Server Error');
   }        
})

//get all todos
app.get('/todos', async (req, res) => {
    try {
        const allTodos = await pool.query('SELECT * FROM todo');
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//get a todo by id
app.get('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id]);
       
        // Optionally, you can send a success message
         res.status(200).json({ message: 'Todo retrieved successfully', todo: todo.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }


})

//update a todo by id
app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query(
            'UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *',
            [description, id]
        );
        res.json(updateTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//delete a todo by id
app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query('DELETE FROM todo WHERE todo_id = $1', [id]);
        res.json({ message: 'Todo was deleted!' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//delete all todos
app.delete('/todos', async (req, res) => {
    try {
        const deleteAllTodos = await pool.query('DELETE FROM todo');
        res.json({ message: 'All todos were deleted!' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


app.get('/', (req, res) => {
    res.send('ToDo List Server is running!');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});