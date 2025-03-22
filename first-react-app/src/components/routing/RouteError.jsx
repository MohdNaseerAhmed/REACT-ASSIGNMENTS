import React from 'react'
import { useRouteError } from 'react-router-dom'

function RouteError() {
    const routeErr= useRouteError()
  return (
    <div className="bg-dark text-warning d-flex justify-content-center align-items-center"style={{minHeight:'100vh'}}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga pariatur amet velit aliquam adipisci fugiat earum totam optio ipsum soluta voluptate nostrum provident consequatur repellat perferendis excepturi explicabo, sapiente eum.
    </div>
  )
}

export default RouteError