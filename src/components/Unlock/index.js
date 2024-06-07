import {useState} from 'react'
import {
  MainContainer,
  LockContainer,
  LockImage,
  LockHeading,
  UnLockButton,
} from './styledComponents'

const Unlock = () => {
  const [lockStatus, toggleLockStatus] = useState(false)

  const onToggleStatus = () => {
    toggleLockStatus(prevState => !prevState)
  }

  return (
    <MainContainer>
      <LockContainer>
        {lockStatus ? (
          <LockImage
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
        ) : (
          <LockImage
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
        )}

        <LockHeading>
          {lockStatus ? 'Your Device is Unlocked' : 'Your Device is Locked'}
        </LockHeading>
      </LockContainer>
      <UnLockButton type="button" onClick={onToggleStatus}>
        {lockStatus ? 'Lock' : 'Unlock'}
      </UnLockButton>
    </MainContainer>
  )
}

export default Unlock
