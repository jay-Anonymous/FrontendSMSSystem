import React, { Component } from 'react'


import { connect } from 'react-redux';
import { getParents } from '../../../redux/actions/student/parentAction';
import Card from '../../../components/cards/Card';


import PrimaryCard from '../../../components/cards/PrimaryCard';
import { FormRow, FormColumn } from '../../../components/containers/FormColumn';


import theme from '../../../theme/theme';
import Heading2 from '../../../components/typography/Heading2';
import Heading5 from '../../../components/typography/Heading5';
import Heading4 from '../../../components/typography/Heading4';




class ViewProfile extends Component {
    componentDidMount() {
        this.props.fetchParents();
    }
    render() {
        console.log(this.props.parentList);
        return (
            // <FlexContainer>
            // <FlexContent>
            <FormColumn>
                <FormRow style={{ padding: "0", paddingRight: "3em", paddingLeft: "3em", margin: "0", }}>


                    <FormColumn style={{ padding: "0.4em", margin: "0", color: theme.colors.viewText }}>
                        <Heading2 >Viththiyanathan Pakeesan</Heading2>

                        

                    </FormColumn>
                    <Card style={{ height: "80px", width: "80px" }}>
                    </Card>


                </FormRow>
                <FormRow>

                    <Card style={{ padding: "0.9em", width: "65em", color: theme.colors.viewText }}>
                        <Heading4 style={{
                            padding: "0", textAlign: "center", margin: "0", color: theme.colors.viewhed,
                            borderBottom: "2px solid #979797",
                            background: theme.colors.viewText,
                            borderRadius: theme.size.btnRadiusWhenHover
                        }}>Personal Informations</Heading4>
                        //

                        

                        {/* <FormRow style={{ padding: "0" }}>
                            <FormColumn viewprofile><Paragraph>formerclass:</Paragraph></FormColumn>
                            <FormColumn viewprofile><Paragraph>05</Paragraph></FormColumn>

                            <FormColumn viewprofile><Paragraph>fstudyend:</Paragraph></FormColumn>
                            <FormColumn viewprofile><Paragraph>2005</Paragraph></FormColumn>

                            <FormColumn viewprofile><Paragraph>fstudystart:</Paragraph></FormColumn>
                            <FormColumn viewprofile><Paragraph>Name:</Paragraph></FormColumn>
                        </FormRow> */}

                        {/* <FormRow style={{ padding: "0" }}>


                            <FormColumn viewprofile><Paragraph>hostelneed:</Paragraph></FormColumn>
                            <FormColumn viewprofile><Paragraph>yes</Paragraph></FormColumn>



                        </FormRow> */}
                    </Card>
                </FormRow>
                {/* "achievementsport": "string",
    "achievementstudy": "string",
    
    "firstname": "string",
    "formarschool": "string",
    
    "gradeId": 0,
    "": 0,
    "": "string",
    "": "string",
    "": 0,
    "": "string",
    "": "string",
    
    "motherstudyend": 0,
    "motherstudystart": 0,
    "parId": 0,
    "parentId": "string",
    
    "sId": 0,
           
    "startDate": "string",
    "stuId": "string" */}


                <FormRow>

                    <FormRow>
                        <Card style={{ padding: "0.9em", color: theme.colors.viewText }}>
                            <Heading4 style={{
                                padding: "0", textAlign: "center", margin: "0", color: theme.colors.viewhed,
                                borderBottom: "2px solid #979797",
                                background: theme.colors.viewText,
                                borderRadius: theme.size.btnRadiusWhenHover
                            }}>Father's Details</Heading4>
                            <FormRow style={{ padding: "0" }}>
                                
                            </FormRow>
                        </Card>
                    </FormRow>

                </FormRow>
                <FormRow>







                </FormRow>



            </FormColumn >

            // </FlexContent>

            // </FlexContainer >
        )
    }
}

const mapStateToProps = state => ({
    parentList: state.parentReducer.parents
})

const mapDispatchToProps = dispatch => ({
    fetchParents: () => dispatch(getParents())
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile)

