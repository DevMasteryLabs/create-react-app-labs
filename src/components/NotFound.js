import { useEffect } from 'react';

const NotFound = (props) => {

  useEffect(() => {
    setTimeout(() => {
      props.history.push('/');
    }, 3000);
  }, [])

  return (
    <div className='container mt-2'>
      <h4 className='text-danger'>404 - Not Found</h4>
    </div>
  );
}

export default NotFound;