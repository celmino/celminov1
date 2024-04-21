import React from "react"
import { Icons } from "./Icons"
import { AddTextFieldDialog } from "./dialogs/AddTextAttributeDialog"
import { AddRichTextFieldDialog } from "./dialogs/AddRichtextFieldDialog"
import { AddNumberFieldDialog } from "./dialogs/AddNumberFieldDialog"




export const TextAttribute = () => (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3804 15.0001C13.2 14.9975 13.021 15.0318 12.8536 15.101C12.6863 15.1701 12.5339 15.2728 12.4055 15.4031C12.2771 15.5334 12.1751 15.6886 12.1055 15.8597C12.0358 16.0309 12 16.2146 12 16.4001C12 16.5856 12.0358 16.7693 12.1055 16.9405C12.1751 17.1116 12.2771 17.2669 12.4055 17.3971C12.5339 17.5274 12.6863 17.6301 12.8536 17.6993C13.021 17.7684 13.2 17.8027 13.3804 17.8001H30.6196C30.8 17.8027 30.979 17.7684 31.1464 17.6993C31.3137 17.6301 31.4661 17.5274 31.5945 17.3971C31.7229 17.2669 31.8249 17.1116 31.8945 16.9405C31.9642 16.7693 32 16.5856 32 16.4001C32 16.2146 31.9642 16.0309 31.8945 15.8597C31.8249 15.6886 31.7229 15.5334 31.5945 15.4031C31.4661 15.2728 31.3137 15.1701 31.1464 15.101C30.979 15.0318 30.8 14.9975 30.6196 15.0001H13.3804ZM13.3804 20.6C13.2 20.5974 13.021 20.6317 12.8536 20.7009C12.6863 20.77 12.5339 20.8727 12.4055 21.003C12.2771 21.1333 12.1751 21.2885 12.1055 21.4596C12.0358 21.6308 12 21.8145 12 22C12 22.1855 12.0358 22.3692 12.1055 22.5404C12.1751 22.7115 12.2771 22.8667 12.4055 22.997C12.5339 23.1273 12.6863 23.23 12.8536 23.2991C13.021 23.3683 13.2 23.4026 13.3804 23.4H30.6196C30.8 23.4026 30.979 23.3683 31.1464 23.2991C31.3137 23.23 31.4661 23.1273 31.5945 22.997C31.7229 22.8667 31.8249 22.7115 31.8945 22.5404C31.9642 22.3692 32 22.1855 32 22C32 21.8145 31.9642 21.6308 31.8945 21.4596C31.8249 21.2885 31.7229 21.1333 31.5945 21.003C31.4661 20.8727 31.3137 20.77 31.1464 20.7009C30.979 20.6317 30.8 20.5974 30.6196 20.6H13.3804ZM13.3804 26.1999C13.2 26.1973 13.021 26.2316 12.8536 26.3007C12.6863 26.3699 12.5339 26.4726 12.4055 26.6029C12.2771 26.7331 12.1751 26.8884 12.1055 27.0595C12.0358 27.2307 12 27.4144 12 27.5999C12 27.7854 12.0358 27.9691 12.1055 28.1403C12.1751 28.3114 12.2771 28.4666 12.4055 28.5969C12.5339 28.7271 12.6863 28.8299 12.8536 28.899C13.021 28.9682 13.2 29.0025 13.3804 28.9999H25.1757C25.356 29.0025 25.5351 28.9682 25.7024 28.899C25.8698 28.8299 26.0221 28.7271 26.1505 28.5969C26.279 28.4666 26.381 28.3114 26.4506 28.1403C26.5202 27.9691 26.556 27.7854 26.556 27.5999C26.556 27.4144 26.5202 27.2307 26.4506 27.0595C26.381 26.8884 26.279 26.7331 26.1505 26.6029C26.0221 26.4726 25.8698 26.3699 25.7024 26.3007C25.5351 26.2316 25.356 26.1973 25.1757 26.1999H13.3804Z" fill="#246EFF" />
        <rect x="37.2" y="32.2" width="30.4" height="20.4" rx="1.2" transform="rotate(-180 37.2 32.2)" stroke="#A1CBFF" stroke-width="1.6" />
    </svg>
)

export const NumberAttribute = () => (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="37.2" y="32.2" width="30.4" height="20.4" rx="1.2" transform="rotate(-180 37.2 32.2)" stroke="#A1CBFF" stroke-width="1.6"/>
<path d="M13.7512 16.0045C13.6505 16.013 13.5494 16.0337 13.4515 16.0665L10.8799 16.9237C10.2062 17.1482 9.84172 17.8755 10.0663 18.5493C10.2909 19.223 11.0216 19.5901 11.6936 19.3629L12.5725 19.0699V26.7142C12.5725 27.4248 13.1477 28 13.8583 28C14.5689 28 15.1441 27.4248 15.1441 26.7142V17.2853C15.1441 16.8721 14.9452 16.484 14.61 16.2423C14.358 16.061 14.0532 15.9791 13.7512 16.0045ZM18.1442 25.3967C17.8032 25.3967 17.4761 25.5321 17.235 25.7733C16.9939 26.0144 16.8584 26.3414 16.8584 26.6824C16.8584 27.0234 16.9939 27.3505 17.235 27.5916C17.4761 27.8327 17.8032 27.9682 18.1442 27.9682C18.4852 27.9682 18.8122 27.8327 19.0534 27.5916C19.2945 27.3505 19.43 27.0234 19.43 26.6824C19.43 26.3414 19.2945 26.0144 19.0534 25.7733C18.8122 25.5321 18.4852 25.3967 18.1442 25.3967ZM22.4301 25.3967C22.0891 25.3967 21.762 25.5321 21.5209 25.7733C21.2798 26.0144 21.1443 26.3414 21.1443 26.6824C21.1443 27.0234 21.2798 27.3505 21.5209 27.5916C21.762 27.8327 22.0891 27.9682 22.4301 27.9682C22.7711 27.9682 23.0981 27.8327 23.3393 27.5916C23.5804 27.3505 23.7158 27.0234 23.7158 26.6824C23.7158 26.3414 23.5804 26.0144 23.3393 25.7733C23.0981 25.5321 22.7711 25.3967 22.4301 25.3967Z" fill="#246EFF"/>
</svg>
)




export const AttributesMenuItems = [
    {
        id: 'text',
        title: 'Text',
        description: 'A single line of text.',
        icon: TextAttribute,
        dialog: AddTextFieldDialog
    },
    {
        id: 'richtext',
        title: 'Rich Text',
        description: 'A text with rich formatting options.',
        icon: Icons.RichTextAttribute,
        dialog: AddRichTextFieldDialog

    },
    {
        id: 'number',
        title: 'Number',
        icon: NumberAttribute,
        dialog: AddNumberFieldDialog

    },
    {
        id: 'select',
        title: 'Single Select',
        icon: Icons.SingleSelectAttribute
    },
    {
        id: 'multiselect',
        title: 'Multi Select',
        icon: Icons.MultiSelectAttribute,

    },
    {
        id: 'workflow',
        title: 'Workflow',
        icon: Icons.WorkflowAttribute,
    },
    {
        id: 'assignee',
        title: 'Assignments',
        icon: Icons.AssignmentAttribute
    },
    {
        id: 'date',
        title: 'Date',
        icon: Icons.DateAttribute
    },
    {
        id: 'checkbox',
        title: 'Checkbox',
        icon: Icons.CheckboxAttribute
    },
    {
        id: 'url',
        title: 'URL',
        icon: Icons.URLAttribute
    },
    {
        id: 'email',
        title: 'Email',
        icon: Icons.EmailAttribute
    },
    {
        title: 'Phone',
        icon: Icons.PhoneAttribute
    },
    {
        title: 'Location',
        icon: Icons.LocationAttribute
    },
    {
        title: 'Avatar',
        icon: Icons.AvatarAttribute
    },
    {
        title: 'Icon',
        icon: Icons.IconAttribute
    },
    {
        title: 'Files',
        icon: Icons.FilesAttribute
    },
    {
        title: 'Comments',
        icon: Icons.CommentsAttribute
    },
    {
        title: 'Relation to...',
        icon: Icons.RelationAttribute,
    },
    {
        id: 'bpmn',
        title: 'BPMN Model',
        icon: Icons.RelationAttribute,
    }
]