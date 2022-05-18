import PropTypes from 'prop-types';
import { Form, Field, Input } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {    

    return (
        <Form>
            <Field>
                {/* <Text>Find contacts by name</Text> */}
                <Input
                    type="text"
                    placeholder="Find contacts by name"                
                    value={filter}
                    onChange={onChange}                
                />
            </Field>
        </Form>        
    );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};