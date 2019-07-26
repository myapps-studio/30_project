import React from 'react';

const TodoList = props => (<div>
                            <ul>
                              {
                                props.tasks.map((data) => {
                                  return (
                                    <li key={data.id}>
                                      Task to do: {data.text}
                                    </li>
                                  );
                                })
                              }
                            </ul>    
                          </div>
);

export default TodoList;