import React from 'react'

const TeamMembers = ({ className, members }) => {
  return (
    <table className={className}>
      <thead>
        <th>Nombre de Usuario</th>
        <th>Email</th>
        <th>Último acceso</th>
        <th>Roles</th>
      </thead>
      <tbody>
        {
          members.map((user, i) => (
            <tr key={i}>
              <th>
                <span>
                  <img width={35} src={user.image} alt={`${user.name}-profile-image`} />
                  {user.name}
                </span>
              </th>
              <th>
                <span>{user.email}</span>
              </th>
              <th>
                <span>{user.lastAccess}</span>
              </th>
              <th>
                <span>{user.role}</span>
              </th>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default TeamMembers;