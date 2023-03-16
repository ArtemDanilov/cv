import React from 'react'

import Container from '../../../../components/Container';
import Item from './item';

const Education = (props) => {
    const data = props.content;

    return (
        <section className="container w-full p-4 lg:pl-8">
            <Container type="advanced" title={ data.title } key={ data.id }>
                {
                    data.items.map( item => {
                        return <Item { ...item } key={ item.id } style={{ color: data.headings_color }} />
                    })
                }
            </Container>
        </section>
    )
}

export default Education;