import { Routes, Route, Link } from 'react-router-dom';

const TaskManagerContainer = () => {
  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <a href='/tasks' className='navbar-brand'>
          Tasks Management
        </a>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to={'/tutorials'} className='nav-link'>
              Tasks
            </Link>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default TaskManagerContainer;
