import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/slice';
import { getFilter } from 'redux/selectors';
import { Div, Label, Input } from './Filter.styled';

export const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    return (
        <Div>
            <Label>Find contacts by name</Label>
            <Input
                type="text"
                name="filter"
                placeholder="Please, enter contact name"
                value={filter}
                onChange={e => dispatch(setFilter(e.target.value.trim()))}>
            </Input>
        </Div>
    );
};