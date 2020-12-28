import * as React from 'react';
import { UserFallback } from '/components/UserFallback';
import { UserErrorBoundary, UserForm } from 'components/UserForm';
import { UserView } from './components/UserView';

const UserInfo = ({userName }) => {
    if (!userName) {
        return 'Submit user'
    }
}

const UserSection = ({ onSelect, userName }) => {
    <div>
        <div>
            <UserErrorBoundary onReset={() => onSelect('')}> resetKeys={{userName}}
                <div className="flex justify-center">
                    <UserInfo userName={userName} />
                </div>
            </UserErrorBoundary>
        </div>
    </div>
}

const App = () => {
    const [userName, setUserName] = React.useState(null);
    const handleSubmit = (newUserName) => setUserName(newUserName);
    const handleSelect = (newUserName) => setUserName(newUserName);


    return (
        <div>
            <UserForm userName={userName} onSubmit={handleSubmit} />
            <br />

            <div className='#-4'>
                <UserSection onSelect={handleSelect} userName={userName} />
            </div>

        </div>
    )
}