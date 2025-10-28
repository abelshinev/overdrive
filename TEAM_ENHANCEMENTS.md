# Team Page Enhancements

## Overview
The Team page has been significantly enhanced with role-based organization, individual member profiles, and comprehensive team member data.

## New Features

### 1. Role-Based Team Organization
Team members are now organized into distinct sections:
- **Drivers Section**: Active racing drivers
- **Leadership Section**: Team management and strategy
- **Engineering Section**: Technical team members
- **Alumni Section**: Former team members (collapsible)

### 2. Individual Member Profiles
Each team member has a dedicated profile page featuring:
- **Full-screen hero section** with member photo and name
- **Comprehensive biography** with detailed background
- **Key achievements list** with notable accomplishments
- **Career statistics sidebar** with relevant stats (races, wins, podiums, etc.)
- **Contact information** including email
- **Social media links** (LinkedIn, Instagram, Twitter)
- **Back button** to return to team overview

### 3. Clickable Team Cards
Team cards are now clickable and navigate to individual member profile pages with smooth animations.

### 4. Enhanced Team Data
Comprehensive data for each team member including:
- Extended biographies
- Career accomplishments
- Statistical data relevant to their role
- Email addresses
- Social media handles

## File Structure

### New Files
- `src/data/teamMembers.ts` - Comprehensive team member data structure
- `src/pages/TeamMemberProfile.tsx` - Individual member profile component

### Modified Files
- `src/pages/TeamPage.tsx` - Reorganized with role-based sections and profile navigation
- `src/components/TeamCard.tsx` - Made clickable with onClick handler

## Design Features
- **Premium motorsport aesthetic** maintained throughout
- **Smooth Motion animations** for all transitions
- **Red accent colors** consistent with brand
- **Dark theme** throughout all sections
- **Visual section separation** with uppercase headings
- **Responsive design** for all screen sizes

## Team Members

### Current Team

#### Drivers (2)
- Marcus Steel - Lead Driver
- Sofia Ramirez - Performance Driver

#### Leadership (2)
- James Chen - Team Principal
- David Martinez - Head of Strategy

#### Engineering (2)
- Elena Volkov - Chief Engineer
- Lisa Thompson - Performance Analyst

#### Alumni (2)
- Robert Hamilton - Former Lead Driver
- Maria Santos - Former Team Principal

## Usage

### Navigating to Profile Pages
1. Visit the Team page
2. Click on any team member card
3. View the comprehensive profile
4. Use the "Back to Team" button to return

### Viewing Alumni
1. Scroll to the Alumni section
2. Click "Show Alumni" button
3. Alumni members will be displayed with grayscale styling
4. Click "Hide Alumni" to collapse the section

## Technical Implementation

### Data Structure
The `teamMembers` array contains objects with:
- Basic info: id, name, role, image, bio, category
- Extended details: fullBio, achievements array
- Statistics: optional stats object with role-specific metrics
- Contact: email and social media links
- Additional info: yearsWithTeam

### State Management
- `showAlumni` - Controls visibility of alumni section
- `selectedMemberId` - Tracks which member profile to display

### Navigation Flow
1. User clicks team member card
2. `setSelectedMemberId(member.id)` is called
3. `TeamMemberProfile` component renders
4. User clicks "Back to Team" button
5. `setSelectedMemberId(null)` resets to main team page

## Future Enhancements
- Add filtering by role
- Add search functionality
- Add more team members
- Include video highlights for drivers
- Add photo galleries for each member

